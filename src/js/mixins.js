export default {
    getTitle: function(data) {
        return { __html: data.title.rendered };
    },
    getExcerpt: function(data) {
        return { __html: data.excerpt.rendered };
    },
    getContent: function(data) {
        return { __html: data.content.rendered };
    },
    getPermalink: function(data) {
        return data.link;
    },
    getPostFormat: function(data) {
        return data.format;
    },
    getAuthor: function(data) {
        return { __html: data._embedded.author[0].name };
    },
    getDate: function(data) {
        var date = new Date(data.date_gmt);
        console.info(navigator);
        console.log(navigator.language);
        return { __html: '<time datetime="' + data.date_gmt + '">' + date.toLocaleString(navigator.language) + '</time>' }
    }
};