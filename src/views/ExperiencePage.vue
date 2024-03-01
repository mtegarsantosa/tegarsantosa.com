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
                            <span v-if="info.yearEnd || info.monthEnd">{{months[info.monthEnd]}} {{info.yearEnd}}</span>
                            <span v-else>now</span>
                            <span>{{months[info.monthStart]}} {{info.yearStart}}</span>
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
                    "company": "OpenFoodChain.com",
                    "role": "Devops Engineer",
                    "type": "Full Time",
                    "description": "Open Food Chain is a proven and affordable infrastructure for entire agrifood supply chains to report and manage ESG claims.",
                    "monthStart": 7,
                    "yearStart": 2023,
                },
                {
                    "company": "PASS3.id",
                    "role": "Devops Engineer",
                    "type": "Full Time",
                    "description": "PASS3 is an adnetwork company that offers a value exchange system for advertisers, publishers, and also users. We bring in-game rewarded ads solution - out-of-app, which allows advertisers to reward verified users who engage with their ads across multiple publisher sites. This approach ensures that advertisers can acquire high-quality users who are genuinely interested in their products or services.",
                    "monthStart": 4,
                    "yearStart": 2023,
                    "monthEnd": 7,
                    "yearEnd": 2023
                },
                {
                    "company": "Itsavirus.com",
                    "role": "Devops Engineer",
                    "type": "Full Time",
                    "description": "A software company based in Amsterdam, Bali, and Singapore that develops innovative smart city solutions.",
                    "monthStart": 6,
                    "yearStart": 2021,
                    "monthEnd": 4,
                    "yearEnd": 2023
                },
                {
                    "company": "PT. Janish Lintas Data",
                    "role": "Fullstack Developer",
                    "type": "Intern",
                    "description": "This company engages in education. Our product named Schoolmedia. We develop many school services apps such as Online Test, Social Media, School CMS, Teaching Material, etc.",
                    "monthStart": 7,
                    "yearStart": 2019,
                    "monthEnd": 1,
                    "yearEnd": 2020
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