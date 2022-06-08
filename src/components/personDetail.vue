<template>
  <div class="">
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name:</td>
          <td>{{personInfo.name}}</td>
        </tr>
        <tr>
          <td>height:</td>
          <td>{{personInfo.height}}</td>
        </tr>
        <tr>
          <td>mass:</td>
          <td>{{personInfo.mass}}</td>
        </tr>
        <tr>
          <td>hair color:</td>
          <td>{{personInfo.hair_color}}</td>
        </tr>
        <tr>
          <td>skin color:</td>
          <td>{{personInfo.skin_color}}</td>
        </tr>
        <tr>
          <td>eye color:</td>
          <td>{{personInfo.eye_color}}</td>
        </tr>
        <tr>
          <td>birth year:</td>
          <td>{{personInfo.birth_year}}</td>
        </tr>
        <tr>
          <td>gender:</td>
          <td>{{personInfo.gender}}</td>
        </tr>
        <tr>
          <td>homeworld:</td>
          <td>{{personInfo.homeworld}}</td>
        </tr>
        <tr>
          <td>films:</td>
          <td>{{personInfo.films}}</td>
        </tr>
        <tr>
          <td>species:</td>
          <td>{{personInfo.species}}</td>
        </tr>
        <tr>
          <td>vehicles:</td>
          <td>{{personInfo.vehicles}}</td>
        </tr>
        <tr>
          <td>starships:</td>
          <td>{{personInfo.starships}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'peopleDetail',

  data() {
    return {
      personNumber: parseInt(this.$route.query.id),
      personInfo: [],
      personImg: "",
    }
  },

  methods: {
    getPersonInfo(personNumber) {
      const baseURL = `https://swapi.dev/api/people/${personNumber}`;
      this.$http.get(baseURL).then((response) => {
        this.personInfo = response.data;
      })
    },
    getPersonImage(name) {
      const baseURL = `https://serpapi.com/playground?q=${name}&tbm=isch&ijn=0`;
      this.$http.get(baseURL).then((response) => {
        this.personImg = response.data.images_results[0].source;
        console.log(this.personImg);
      })
    }
  },

  created() {
    this.getPersonInfo(this.personNumber);
  }
}
</script>

<style scoped>
th {
  text-transform: capitalize;
}
</style>
