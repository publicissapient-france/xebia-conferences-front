<!--v-bind="{ [`xs${card.flex}`]: true }"-->
<template>
  <v-container v-if="conferences && Object.keys(conferences).length" fluid grid-list-md><!-- class="grey lighten-4">-->
    <v-layout row wrap>
      <v-flex
        v-bind="{ xs4: true }"
        v-for="(conference, key, index) in conferences"
        :key="key"
      >
        <v-card height="100%">
          <v-card-media :src="conference.logo.url" height="200px"></v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-2">{{conference.title}}
                <v-chip small>{{conference.meta_year}}</v-chip>
                <v-chip v-if="conference.has_internal_cfp" small>CFP</v-chip>
              </h3>
              <div v-if="conference.speakers && Object.keys(conference.speakers).length">
                <h4 class="subheading mb-0">Speakers:</h4>
                <ul>
                  <li v-for="speaker in conference.speakers">{{speaker}}</li>
                  <!--<li>Created: {{stack.Stack.CreationTime | moment("from", "now")}}</li>
                  <li>Last Updated: {{stack.Stack.LastUpdatedTime | moment("from", "now")}}</li>-->
                </ul>
              </div>
              <h4 class="subheading mb-0">Infos:</h4>
              <div>
                <ul>
                  <li>Site web : <a :href="conference.website">{{conference.website}}</a></li>
                  <li v-if="conference.dates.length > 1">
                    Dates :
                    <ul>
                      <li v-for="date in conference.dates">{{date | moment("calendar")}}</li>
                    </ul>
                  <li v-else>
                    Date : {{conference.dates[0] | moment("calendar")}}
                  </li>
                  <li>Lieu : <strong>{{conference.venue.name}}</strong></li>
                  <li v-if="conference.venue.address != undefined">Adresse : {{conference.venue.address.localized_address_display}}</li>
                  <li>Organisateurs :
                    <ul>
                      <li v-for="xebian in conference.organizers.xebians">{{xebian}}</li>
                    </ul>
                  </li>
                  <li v-if="conference.organizers.coorganizers">Co-organisateurs : <div v-for="coorg in conference.organizers.coorganizers">{{coorg}}</div>
                  </li>
                </ul>
              </div>
            </div>
          </v-card-title>
          <v-card-actions><!-- class="white">-->
            <v-spacer></v-spacer>
            <v-btn icon
              :href="conference.website"
              :title="'Link to the website of ' + conference.title"
              >
              <v-icon>fa-link</v-icon>
            </v-btn>
            <v-btn icon
              :href="getGoogleMapsLink(conference.location, conference.address)"
              :title="'Google Map for ' + conference.location"
              >
              <v-icon>fa-map</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// TODO this should probably done elsewhere
import axios from 'axios';

// TODO this too
const apiUrl = 'https://fathomless-chamber-23814.herokuapp.com/';

export default {
  data() {
    return {
      conferences: {},
    };
  },
  async created() {
    try {
      const response = await axios.get(`${apiUrl}/conferences`);
      this.conferences = response.data;
    } catch (e) {
      this.errors.push(e);
    }
  },
  filters: {
    capitalize: function capitalize(value) {
      if (!value) return '';
      const strval = value.toString();
      return strval.charAt(0).toUpperCase() + strval.slice(1);
    },
    replaceSpaces: function replaceSpaces(value) {
      if (!value) return '';
      const strval = value.toString();
      return strval.replace('-', ' ');
    },
  },
  methods: {
    getGoogleMapsLink: function getLink(locationName, address) {
      return encodeURI(`https://www.google.com/maps/search/?api=1&query=${locationName}, ${address}`);
    },
    // getCommaSpans: function getList(list) {
    //   return '<span>' + list.join('</span><span>') + '</span>';
    // },
  //   getCfnStackLink: function getLink(stackArn) {
  //     const region = 'eu-west-1';
  //     return `https://${region}.console.aws.amazon.com/cloudformation/home?region=${region}#/stack/detail?stackId=${stackArn}`;
  //   },
  //   getAppLink: function getLink(environment) {
  //     return `https://connect-${environment}.photoscience.photobox.com`;
  //   },
  },
};
</script>
