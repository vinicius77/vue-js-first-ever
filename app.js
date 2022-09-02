const app = Vue.createApp({
    data() {
        return {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@gmail.com',
          gender: 'male',
          picture: 'https://randomuser.me/api/portraits/men/10.jpg',
          interval: null
        }  
    },
    methods: {
        async generate(){
           const response = await fetch("https://randomuser.me/api") 
           const data = await response.json()
           const user = data.results[0]

           this.firstName = `${user.name.title} ${user.name.first}`
           this.lastName = user.name.last
           this.gender = user.gender
           this.email = user.email
           this.picture = user.picture.large
        }
    }
    
})

app.mount("#app")