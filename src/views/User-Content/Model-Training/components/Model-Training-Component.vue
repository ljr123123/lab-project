<template>
    <div class="Model-Training">
        <p class="title">模型训练</p>
        <ul class="model-training-content">
            <li v-for="item in training_information" :key="item.name" class="model-training-setting">
                <img :src="item.img_src" class="setting-icons">
                <div>
                    <p class="training-setting-name">{{ item.name }}</p>
                    <p class="training-setting-value">{{ item.value }}</p>
                </div>
            </li>
        </ul>
        <div class="model-training-select">
            <button class="start-training" @click="createTraining('这是数据设定','这是标题','这是介绍')">启动训练</button>
            <div class="download-box">
                <img src="../../../../assets/icons/download.svg" class="download-image">
                <p class="download-text">下载模型</p>
            </div>
        </div>
    </div>
</template>

<script>
import fetchDataLocation from '../../../../App.vue'
export default {
    name: "Model-Training",
    props: {
        training_information: Array
    },
    methods: {
        createTraining(data_set, title, description) {
            fetch(
                fetchDataLocation +
                "/users/" +
                localStorage.getItem("user_id") +
                "/projects/" +
                localStorage.getItem("project_id") +
                "/experiments/",
                {
                    method: "POST",
                    headers: {
                        accept: "application/json",
                        Authorization: "Bearer " + localStorage.getItem("access_token"),
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        parameter: {
                            dataset: data_set,
                            algo_name: this.$store.state.training_setting.algorithm_name,
                        },
                    }),
                }
            )
                .then((res) => res.json())
                .then((res) => {
                    if(res.is_active)alert("创建成功!");
                });
        }
    }
}
</script>

<style scoped>
.Model-Training {
    height: 45%;
    width: 55%;
    margin-top: 2%;
}

.title {
    font-size: 3.2vh;
    font-weight: bold;
    color: #2A2A2A;
}

.model-training-content {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: 2%;

}

.model-training-setting {
    width: 30%;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 2vh;
}

.setting-icons {
    width: 5vh;
    padding: .8vh;
    background: #EEF2FC;
    border-radius: 50%;
    margin-top: 8%;
    margin-left: 8%;
}

.training-setting-name {
    font-size: 2.2vh;
    color: #2A2A2A;
    margin-left: 8%;
}

.training-setting-value {
    font-size: 3.2vh;
    color: #2A2A2A;
    font-weight: bold;
    margin-left: 8%;
    margin-bottom: 5%;
}

.model-training-select {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 15%;
    margin-top: 3%;
    margin-left: 9%;
    align-items: center;
}

.download-box {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 50%;
    margin-left: 3%;
}

.start-training {
    width: 20%;
    height: 100%;
    border-radius: 2vh;
    border: 0;
    font-size: 2.2vh;
    font-weight: bold;
    cursor: pointer;
    background: #567EE3;
    color: #FFFFFF;
    letter-spacing: .2vh;
    transition: all .15s;
}

.start-training:hover {
    transition: all .15s;
    background: #E8F0FF;
    color: #2a2a2a75;
}

.download-image {
    width: 3.5vh;
    cursor: pointer;
}

.download-text {
    color: #567EE3;
    cursor: pointer;
}
</style>
