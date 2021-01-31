new Vue ({
    el: '#app',
    data: {
        title: "Hello world!",
        styleCSS: "",
        value: 1                 
    },
    methods: {
        changeText() {
            this.title = "Какой то текст"
        },
        increment(value){
            this.value = value
            if (value==25)
            setTimeout(() => {
                alert("Цифра 25")
            }, 300);

        },
    },
    computed: {
        doubleValue() {
            return this.value * 2
        }
    }
})
