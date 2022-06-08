<template>
  <div class="">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in peopleInfo" :key="person.index">
          <td class="firstTd">{{person.id}}</td>
          <td class="namePerson">
            {{person.name}}
          </td>
          <td>
            <router-link :to="{path:'/person',query:{id: person.id}}" class="button-ver-mais">Ver Detalhes</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="button-holder">
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

<style>
table {
  border-collapse: collapse;
  margin: 0 auto;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 90%;
}

table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

table th,
table td {
  padding: 12px 15px;
  text-align: center;
}

.namePerson {
  text-align: left;
}

table td:not(.firstTd) {
  border-left: 2px solid #009879;
}

table tbody tr {
  border-bottom: 1px solid #dddddd;
}

table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.button-ver-mais {
  padding: 10px;
  background-color: #4fb7df;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.button-holder {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.button-holder button {
  padding: 10px;
  background-color: #009879;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  box-shadow: none;
  border: none;
  text-transform: capitalize;
}

@media (max-width: 768px) {
  table {
    width: 94.444vw;
    min-width: unset;
  }
  .button-ver-mais {
    padding: 5px;
    font-size: 13px;
  }
}
</style>
