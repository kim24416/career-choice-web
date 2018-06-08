<template>
    <v-layout row wrap>
        <v-flex xs3>
            <v-subheader>Where do you want to go to school?</v-subheader>
        </v-flex>
        <v-flex xs3>
            <v-select
                :items="schools"
                label="Select"
                single-line
                autocomplete="true"
            ></v-select>
        </v-flex>
        <v-flex xs6></v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      schools: [
        'AmeriTech College Draper',
        'Brigham Young University Provo',
        'Broadview Entertainment Arts University',
        'Broadview University Layton',
        'Broadview University Orem',
        'Broadview University West Jordan',
        'DeVry University Utah',
        'Dixie State College of Utah',
        'Eagle Gate College Layton',
        'Eagle Gate College Murray',
        'Eagle Gate College Salt Lake City',
        'Fortis College Salt Lake City',
        'Independence University',
      ],
    };
  },
};
</script>

