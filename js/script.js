var app = new Vue ({
    el: '#root',
    data: {
        albums: [],
        albumsGender: [],
        genreChoosen: ''
    },
    created() {
        axios 
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(function (result) {
                app.albums = result.data.response;
                let i = 0;
                while (i < app.albums.length) {
                    if (!app.albumsGender.includes(app.albums[i].genre)) {
                        app.albumsGender.push(app.albums[i].genre);
                    }
                    i++;
                }
            })
    },
    methods: {
        setGenreChoosen: function() {
            let value = document.getElementById('picker').value;
            console.log(value);
            this.genreChoosen = value;
        }
    }
}) 