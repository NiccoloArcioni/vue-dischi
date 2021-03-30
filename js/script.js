var app = new Vue ({
    el: '#root',
    data: {
        albums: [],
    },
    created() {
        axios 
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(function (result) {
                console.log(result);
                app.albums = result.data.response;
                console.log(app.albums);
            })
    }
})