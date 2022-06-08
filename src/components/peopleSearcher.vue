<template>
  <div class="">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in peopleInfo" :key="person.index">
          <td>{{person.id}}</td>
          <td class="namePerson">
            <router-link :to="{path:'/person',query:{id: person.id}}">{{person.name}}</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <button v-on:click="prevPage()">prev</button>
      <button v-on:click="nextPage()">next</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'peopleSearcher',

  data() {
    return {
      peopleInfo: [],
      maxPeople: 0,
      pgNumber: 1,
      currentPage: 1,
      urlPrev: null,
      urlNext: null,
    }
  },

  methods: {
    getPeopleCount(pgNumber) {
      const baseURL = `https://swapi.dev/api/people/?page=${pgNumber}`;
      this.$http.get(baseURL).then((response) => {
        this.maxPeople = response.data.count;

        if (response.data.previous) {
          this.urlPrev = parseInt(response.data.previous.substring('https://swapi.dev/api/people/?page='.length));
        }

        if (response.data.next) {
          this.urlNext = parseInt(response.data.next.substring('https://swapi.dev/api/people/?page='.length));
        }

        response.data.results.forEach(person => {
          this.peopleInfo.push({
            "name": person.name,
            "id": person.url.substring('https://swapi.dev/api/people/'.length).split("/")[0]
          });
        });
      })
    },
    nextPage() {
      console.log('aaaaa');
      if (this.urlNext !== null) {
        this.currentPage = this.urlNext;
      }
    },
    prevPage() {
      if (this.urlPrev !== null) {
        this.currentPage = this.urlPrev;
      }
    },
  },

  watch: {
    currentPage() {
      this.peopleInfo = [];
      this.pgNumber = this.currentPage;
      this.getPeopleCount(this.pgNumber);
    }
  },

  created() {
    this.getPeopleCount(this.pgNumber);
  }
}
</script>

<style scoped>
th,
.namePerson {
  text-align: left;
}
</style>
