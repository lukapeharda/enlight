export default {
    setTitle: function(data) {
        if (typeof data == 'object') {
            document.title = this.getTitle(data).__html + ' - ' + enlight.title_default;
        } else if (typeof data == 'string') {
            document.title = data + ' - ' + enlight.title_default;
        } else if (typeof data == 'undefined') {
            document.title = enlight.title_default;
        }
    }
};