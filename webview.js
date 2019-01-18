module.exports = (Franz) => {

    const getMessages = function getMessages() {
        let count = 0;

        var notificationCount = window.zmNCenter.counter.count();
        var unreadCount = zmInit.getUnreadViewCount();

        count = notificationCount + unreadCount;

        if (!isFinite(count)) {
            count = 0;
        }

        Franz.setBadge(count);
    };

    Franz.loop(getMessages);

};