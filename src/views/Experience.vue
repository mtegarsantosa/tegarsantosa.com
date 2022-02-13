<template>
    <div class="work">
        <section class="work section" id="work">
            <h2 class="section-title">work experience.</h2>
            <div class="work__container bd-grid">
            <div>
                <div class="bg-timeline">
                    <section class="timeline">
                        <ul>
                        <li v-for="(info, index) in timelineData" v-bind:key="index">
                            <span></span>
                            <div>{{info.company}} - {{info.type}}</div>
                            <div>{{info.role}}</div>
                            <div>
                                {{
                                    calcDate(
                                        {year: info.yearEnd, month: info.monthEnd},
                                        {year: info.yearStart, month: info.monthStart}
                                    )
                                }}
                            </div>
                            <div>{{info.description}}</div>
                            <div class="year">
                            <span>{{months[info.monthStart]}} {{info.yearStart}}</span>
                            <span v-if="info.yearEnd || info.monthEnd">{{months[info.monthEnd]}} {{info.yearEnd}}</span>
                            <span v-else>now</span>
                            </div>
                        </li>
                        </ul>
                    </section>
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
            months: [0, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            timelineData: [
                {
                    "company": "Projects.co.id",
                    "role": "Software Engineer",
                    "type": "Freelance",
                    "description": "Projects.co.id is a web that connects freelancers with people who need services.",
                    "monthStart": 1,
                    "yearStart": 2016,
                    "monthEnd": 12,
                    "yearEnd": 2019
                },
                {
                    "company": "PT. Janish Lintas Data",
                    "role": "Fullstack Developer",
                    "type": "Intern",
                    "description": "This company engaged in education. Our product named Schoolmedia. We develop any school services apps such as Online Test, Social Media, School CMS, Teaching Material, etc.",
                    "monthStart": 7,
                    "yearStart": 2019,
                    "monthEnd": 1,
                    "yearEnd": 2020
                },
                {
                    "company": "Vesperia.id",
                    "role": "Fullstack Developer",
                    "type": "Freelance",
                    "description": "An IT consulting corporation specializing in field of professional Web developers, Android and IOS apps. Also, focus on the development of infrastructure and payment technology. We develop: SPH Komnas HAM Republik Indonesia",
                    "monthStart": 9,
                    "yearStart": 2020,
                    "monthEnd": 12,
                    "yearEnd": 2020
                },
                {
                    "company": "Itsavirus",
                    "role": "Backend Developer",
                    "type": "Full Time",
                    "description": "-",
                    "monthStart": 6,
                    "yearStart": 2021
                },
            ]
        }
    },
    methods: {
        calcDate(end, start) {
            end = end.year == undefined || end.month == undefined ? new Date() : new Date(`${end.year}-${end.month}-31`)
            start = new Date(`${start.year}-${start.month}-01`)

            let diff = Math.floor(end.getTime() - start.getTime())
            let day = 1000 * 60 * 60 * 24

            let days = Math.floor(diff/day)
            let months = Math.floor(days/31)
            let years = Math.floor(months/12)
            let result = `${years} year ${months % 12} month`
            return result
        }
    },
    mounted() {
    }
}
</script>