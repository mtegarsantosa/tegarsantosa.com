<template>
  <div>
    <section class="achievement section" id="achievement">
      <h2 class="section-title">achievements.</h2>
      <div>
        <div class="achievement__container bd-grid">
          <div v-for="(devs, index) in developers" :key="index" class="achievement__content">
            <div>
              <a :href="`/img/certificates/developer/${devs.certificate}.jpg`" target="_blank">
                <img :src="`/img/certificates/developer/${devs.certificate}.jpg`">
              </a>
            </div>
            <div class="achievement__caption">
              <b>{{devs.name}}</b>
              <p>{{devs.date}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="achievement section" id="achievement">
      <div v-for="(acheivement, index) in achievements" :key="index">
        <div class="bd-grid">
          <h1>{{acheivement.name}}</h1>
        </div>
        <div class="achievement__container bd-grid">
          <div v-for="(level, index) in acheivement.levels" :key="index" class="achievement__content">
            <h1>{{level.name}}</h1>
            <ul>
              <li v-for="(list, index) in level.lists" :key="index">
                  <a v-if="list.certificate" target="_blank" :href="`/img/certificates/${list.certificate}`">
                    <img :src="`/img/certificates/${list.certificate}`">
                  </a>
                  <div class="achievement__caption" v-else>
                    [certificate not available]
                  </div>
                  <div class="achievement__caption">
                    <b>{{list.title}}</b>
                    <p>{{list.location}}</p>
                    <p>{{list.date}}</p>
                  </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="achievement section" id="achievement">
      <h2 class="section-title">courses.</h2>
      <div>
        <div class="achievement__container bd-grid">
          <div v-for="(course, index) in courses" :key="index" class="achievement__content">
            <div>
              <a :href="`/img/certificates/course/${course.certificate}.jpg`" target="_blank">
                <img :src="`/img/certificates/course/${course.certificate}.jpg`">
              </a>
              <a :href="`/img/certificates/course/${course.certificate}-2.jpg`" target="_blank">
                <img :src="`/img/certificates/course/${course.certificate}-2.jpg`">
              </a>
            </div>
            <div class="achievement__caption">
              <b>{{course.name}}</b>
              <p>{{course.date}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="achievement section" id="achievement">
      <h2 class="section-title">internship.</h2>
      <div>
        <div class="achievement__container bd-grid">
          <div v-for="(intern, index) in work_internship" :key="index" class="achievement__content">
            <div>
              <a :href="`/img/certificates/work_internship/${intern.certificate}.jpg`" target="_blank">
                <img :src="`/img/certificates/work_internship/${intern.certificate}.jpg`">
              </a>
              <a :href="`/img/certificates/work_internship/${intern.certificate}-2.jpg`" target="_blank">
                <img :src="`/img/certificates/work_internship/${intern.certificate}-2.jpg`">
              </a>
            </div>
            <div class="achievement__caption">
              <b>{{intern.name}}</b>
              <p>{{intern.date}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        achievements: [{
            name: "👨‍💻 Tech Competition",
            textClass: "danger",
            levels: [{
                name: "City Level",
                lists: [{
                    title: "2nd Winner LKS SMK 2019",
                    location: "Metro, Lampung",
                    date: "17 January 2019",
                    certificate: "ii-lks-city.jpg"
                  },
                  {
                    title: "2nd Winner Appropriate Technology (Augmented Reality and Internet of Things)",
                    location: "Metro, Lampung",
                    date: "29 August 2019",
                    certificate: "ttg.jpg"
                  }
                ]
              },
              {
                name: "Province Level",
                lists: [{
                    title: "2nd Winner Web Design PRJ Lampung University",
                    location: "Bandar Lampung, Lampung",
                    date: "27 October 2018",
                    certificate: "2-prj-unila.jpg"
                  },
                  {
                    title: "1st Winner Web Blog Competition Teknokrat University",
                    location: "Bandar Lampung, Lampung",
                    date: "20 February 2019",
                    certificate: "weblog-tekonokrat.jpg"
                  }
                ]
              },
              {
                name: "National Level",
                lists: [{
                    title: "4th Winner SmartHackathon Kominfo",
                    location: "Central Jakarta, Jakarta",
                    date: "14 December 2018",
                    certificate: "4-smarthackathon.jpg"
                  },
                  {
                    title: "5th Winner Edutech Coding Competition",
                    location: "Central Jakarta, Jakarta",
                    date: "20 February 2019",
                    certificate: "5-edutech.jpg"
                  },
                  {
                    title: "1st Winner Web App Competition PNJ Jakarta",
                    location: "Depok, Jawa Barat",
                    date: "04 May 2019",
                    certificate: "1-itechnocup.jpg"
                  }
                ]
              }
            ]
          },
          {
            name: "📎 Other Achievement",
            textClass: "success",
            levels: [{
                name: "City Level",
                lists: [{
                    title: "3rd Winner O2SN Chess Competition",
                    location: "Metro, Lampung",
                    date: "19 March 2013",
                    certificate: "iii-chess-city.jpg"
                  },
                  {
                    title: "1st Winner O2SN Chess Competition",
                    location: "Metro, Lampung",
                    date: "21 April 2014",
                    certificate: "1-chess-city.jpg"
                  },
                  {
                    title: "4th Winner Chess Junior High School",
                    location: "Metro, Lampung",
                    date: "14 June 2015",
                    certificate: "iv-chess-yunior-city.jpg"
                  },
                  {
                    title: "3rd Winner FLS2N Traditional Music",
                    location: "Metro, Lampung",
                    date: "20 March 2017",
                    certificate: "3-traditional-music-fls2n.jpg"
                  },
                  {
                    title: "1st Winner LT3 Scout",
                    location: "Metro, Lampung",
                    date: "01 April 2017",
                    certificate: "1-scout-city.jpg"
                  }
                ]
              },
              {
                name: "Province Level",
                lists: [{
                  title: "5th Winner Chess Junior < 14",
                  location: "Bandar Lampung, Lampung",
                  date: "22 Mei 2014",
                  certificate: "v-chess-yunior-province.jpg"
                }]
              }
            ]
          }
        ],
        courses: [{
            name: "ITECH Photoshop",
            certificate: "itech-photoshop",
            date: "Metro, Jan-Mar 2018"
          },
          {
            name: "ITECH Web Programming",
            certificate: "itech-web-programming",
            date: "Metro, Mar-Apr 2018"
          },
          {
            name: "ITECH Android Programming",
            certificate: "itech-android-programming",
            date: "Metro, Apr-Nov 2018"
          },
          {
            name: "WebHozz Laravel",
            certificate: "webhozz-laravel",
            date: "Jakarta, Dec 2018-Jan 2019"
          }
        ],

        participant: [{
            name: "LKSN AI 2020",
            certificate: "lksn-ai",
            date: "Jakarta, 23 Oct 2020"
          },
          {
            name: "SejutaCita Essay",
            certificate: "sejutacita-essay",
            date: "Metro, 1-8 Nov 2020"
          },
          {
            name: "SejutaCita Quiz",
            certificate: "sejutacita-quiz",
            date: "Metro, 14-15 Nov 2020"
          },
          {
            name: "SejutaCita Webinar",
            certificate: "sejutacita-webinar",
            date: "Metro, 1 Nov 2020"
          },
          {
            name: "BIONIX ITS Competition",
            certificate: "bionix-its",
            date: "Metro, 1 Nov 2020"
          },
        ],

        work_internship: [{
          name: "Schoolmedia (PT. Janish Lintas Data)",
          certificate: "pkl",
          date: "Tanggerang Selatan, 18 Jan 2020"
        }],

        developers: [{
          name: "Certified Kubernetes Application Developer",
          certificate: "ckad",
          date: "24 Apr 2022"
        },
        {
          name: "Certified Kubernetes Administrator",
          certificate: "cka",
          date: "25 Jul 2022"
        }]
      }
    }
  }
</script>