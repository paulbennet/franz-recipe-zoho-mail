module.exports = (Franz) => {

    const getMessages = function getMessages() {
        let count = 0;

        // Fetch notifications (bell-icon) count
        var notificationCount = window.zmNCenter.counter.count();

        // Fetch unread emails count
        var unreadCount = zmInit.getUnreadViewCount();

        count = notificationCount + unreadCount;

        // If `count` is shitty, make it `0`
        if (!isFinite(count)) {
            count = 0;
        }

        Franz.setBadge(count);
    };

    Franz.loop(getMessages);

};