var app = new Vue ({
    el: '#root',
    data: {
        albums: [],
        albumsSortedByYear:[],
        albumsGender: [],
        genreChoosen: '',
        showSorted: false
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
                    app.albumsSortedByYear.push(app.albums[i]);
                    app.albumsSortedByYear = app.albumsSortedByYear.sort(function (a, b) {
                        return a.year - b.year;
                    });
                    i++;
                }
            })
    },
    methods: {
        setGenreChoosen: function() {
            let value = document.getElementById('picker').value;
            console.log(value);
            this.genreChoosen = value;
        },
        toggleSort: function() {
            if (this.showSorted == false) {
                this.showSorted = true;
            } else {
                this.showSorted = false;
            }
        }
    }
}) 