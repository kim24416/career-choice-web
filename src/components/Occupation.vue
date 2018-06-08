<template>
    <v-container fluid>
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
        <v-layout row wrap>
            <v-flex xs3>
                <v-subheader>What do you want to study?</v-subheader>
            </v-flex>
            <v-flex xs3>
                <v-select
                    :items="studies"
                    label="Select"
                    single-line
                    autocomplete="true"
                ></v-select>
            </v-flex>
            <v-flex xs6></v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs6>
                <v-data-table
                    :headers="headers"
                    :items="occupations"
                    hide-actions
                    class="elevation-1"
                >
                    <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.salary }}</td>
                    <td class="text-xs-right">{{ props.item.employment }}</td>
                    </template>
                </v-data-table>
            </v-flex>
            <v-flex xs6></v-flex>
        </v-layout>
    </v-container>
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
      studies: [
        'Business',
        'History',
        'Arts',
        'Physics',
        'Bio Chemistry',
        'Law',
        'Finance',
        'Economics',
        'Information Science',
        'Computer Science',
      ],
      headers: [
        { text: 'Occupation', value: 'occupation' },
        { text: 'Salary', value: 'salary' },
        { text: 'Employment', value: 'employment' },
      ],
      occupations: [
        {
          value: false,
          name: 'Accountant',
          salary: '$60,000',
          employment: '10%',
        },
        {
          value: false,
          name: 'Advertising Manager',
          salary: '$50,000',
          employment: '20%',
        },
        {
          value: false,
          name: 'Architect',
          salary: '$75,000',
          employment: '5%',
        },
        {
          value: false,
          name: 'Baker',
          salary: '$40,000',
          employment: '2%',
        },
      ],
    };
  },
};
</script>

