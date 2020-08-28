var events = (function () {
    var topics = {};

    return {
        // 注册监听函数
        subscribe: function (topic, handle) {
            if (!topics.hasOwnProperty(topic)) {
                topics[topic] = [];
            }
            topics[topic].push(handle)
        },

        // 发布事件
        publish: function (topic, info) {
            if (topics.hasOwnProperty(topic)) {
                topics[topic].forEach(function (handle) {
                    handle(info);
                });
            }
        },

        // 移除主题的一个观察者的回调事件
        remove: function (topic, handle) {
            if (!topics.hasOwnProperty(topic)) return;

            var handleIndex = -1;
            topics[topic].forEach(function (item, index) {
                if (item === handle) {
                    handleIndex = index;
                }
            });

            if (handleIndex >= 0) {
                topics[topic].splice(handleIndex, 1)
            }
        },

        // 移除主题的所有观察者的回调函数
        removeAll: function (topic) {
            if (topic.hasOwnProperty(topic)) {
                topics[topic] = [];
            }
        }
    };
})();