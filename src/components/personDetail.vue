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
          <td class="texto-legenda-detail">Name:</td>
          <td class="texto-info-detail">{{personInfo.name}}</td>
        </tr>
        <tr>
          <td class="texto-legenda-detail">height:</td>
          <td class="texto-info-detail">{{personInfo.height}}</td>
        </tr>
        <tr>
          <td class="texto-legenda-detail">mass:</td>
          <td class="texto-info-detail">{{personInfo.mass}}</td>
        </tr>
        <tr>
          <td class="texto-legenda-detail">hair color:</td>
          <td class="texto-info-detail">{{personInfo.hair_color}}</td>
        </tr>
        <tr>
          <td class="texto-legenda-detail">skin color:</td>
          <td class="texto-info-detail">{{personInfo.skin_color}}</td>
        </tr>
        <tr>
          <td class="texto-legenda-detail">eye color:</td>
          <td class="texto-info-detail">{{personInfo.eye_color}}</td>
        </tr>
        <tr>
          <td class="texto-legenda-detail">birth year:</td>
          <td class="texto-info-detail">{{personInfo.birth_year}}</td>
        </tr>
        <tr>
          <td class="texto-legenda-detail">gender:</td>
          <td class="texto-info-detail">{{personInfo.gender}}</td>
        </tr>
        <tr>
          <td class="texto-legenda-detail">homeworld:</td>
          <td class="texto-info-detail">{{personHomeWorld}}</td>
        </tr>
        <tr>
          <td class="texto-legenda-detail">films:</td>
          <td class="texto-info-detail">
            <ul>
              <li v-for="film in personFilms" :key="film.index">
                {{film}}
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="texto-legenda-detail">species:</td>
          <td class="texto-info-detail">{{personSpecies}}</td>
        </tr>
        <tr>
          <td class="texto-legenda-detail">vehicles:</td>
          <td class="texto-info-detail">
            <div v-for="vehicles in personVehicles" :key="vehicles.index" class="forHolder">
              <ul class="detailed-item">
                <li><strong>name: </strong> {{vehicles.name}}</li>
                <li><strong>model: </strong> {{vehicles.model}}</li>
                <li><strong>manufacturer: </strong> {{vehicles.manufacturer}}</li>
              </ul>
            </div>
          </td>
        </tr>
        <tr>
          <td class="texto-legenda-detail">starships:</td>
          <td class="texto-info-detail">
            <div v-for="starships in personStarships" :key="starships.index" class="forHolder">
              <ul class="detailed-item">
                <li><strong>name: </strong> {{starships.name}}</li>
                <li><strong>model: </strong> {{starships.model}}</li>
                <li><strong>manufacturer: </strong> {{starships.manufacturer}}</li>
              </ul>
            </div>
          </td>
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
      personHomeWorld: "",
      personSpecies: "",
      personFilms: [],
      personVehicles: [],
      personStarships: [],
    }
  },

  methods: {
    getPersonInfo(personNumber) {
      const baseURL = `https://swapi.dev/api/people/${personNumber}`;
      this.$http.get(baseURL).then((response) => {
        this.personInfo = response.data;
        this.getpersonHomeWorld();
        if (response.data.species.length > 0) {
          this.getpersonSpecies();
        }
        this.getFilmNames();
        this.getVehicleNames();
        this.getStarshipNames();
      })
    },
    getpersonHomeWorld() {
      const temp = parseInt(this.personInfo.homeworld.substring('https://swapi.dev/api/planets/'.length).split("/")[0]);
      const baseURL = `https://swapi.dev/api/planets/${temp}`;
      this.$http.get(baseURL).then((response) => {
        this.personHomeWorld = response.data.name;
      })
    },
    getpersonSpecies() {
      const temp = parseInt(this.personInfo.species[0].substring('https://swapi.dev/api/species/'.length).split("/")[0]);
      const baseURL = `https://swapi.dev/api/species/${temp}`;
      this.$http.get(baseURL).then((response) => {
        this.personSpecies = response.data.name;
      })
    },
    getFilmNames() {
      const temp = this.personInfo.films;
      const idsMovies = [];
      temp.forEach(element => {
        idsMovies.push(parseInt(element.substring('https://swapi.dev/api/films/'.length).split("/")[0]))
      });
      idsMovies.forEach(element => {
        const baseURL = `https://swapi.dev/api/films/${element}`;
        this.$http.get(baseURL).then((response) => {
          this.personFilms.push(response.data.title);
        })
      });
    },
    getVehicleNames() {
      const temp = this.personInfo.vehicles;
      const idsVehicle = [];
      temp.forEach(element => {
        idsVehicle.push(parseInt(element.substring('https://swapi.dev/api/vehicles/'.length).split("/")[0]))
      });
      idsVehicle.forEach(element => {
        const baseURL = `https://swapi.dev/api/vehicles/${element}`;
        this.$http.get(baseURL).then((response) => {
          this.personVehicles.push({
            "name": response.data.name,
            "model": response.data.model,
            "manufacturer": response.data.manufacturer
          });
        })
      });
    },
    getStarshipNames() {
      const temp = this.personInfo.starships;
      const idsStarship = [];
      temp.forEach(element => {
        idsStarship.push(parseInt(element.substring('https://swapi.dev/api/starships/'.length).split("/")[0]))
      });
      idsStarship.forEach(element => {
        const baseURL = `https://swapi.dev/api/starships/${element}`;
        this.$http.get(baseURL).then((response) => {
          this.personStarships.push({
            "name": response.data.name,
            "model": response.data.model,
            "manufacturer": response.data.manufacturer
          });
        })
      });
    },
  },

  created() {
    this.getPersonInfo(this.personNumber);
  }
}
</script>

<style scoped>
.texto-legenda-detail {
  text-transform: capitalize;
  text-align: left;
  border-left: none;
}

.texto-info-detail {
  text-align: left;
  padding: 5px 0 5px 25px;
}

ul {
  list-style-type:none
}

.forHolder {
  padding-bottom: 10px;
}

.forHolder + .forHolder {
  padding-top: 10px;
  border-top: 1px solid gray;
  padding-bottom: 0;
}

@media (max-width: 768px) {
  ul {
    padding: 0;
  }

  li + li {
    margin: 5px 0;
  }

  .texto-info-detail {
    padding-left: 15px;
  }
}
</style>
