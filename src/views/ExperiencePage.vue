<template>
    <div class="work">
        <section class="work section" id="work">
            <h2 class="section-title">work experience.</h2>
            <div class="work__container bd-grid">
                <div class="timeline-wrapper">
                    <div class="timeline">
                        <div 
                            v-for="(info, index) in timelineData" 
                            :key="index"
                            class="timeline-item"
                            :class="{ 'timeline-item--left': index % 2 === 0, 'timeline-item--right': index % 2 !== 0 }"
                        >
                            <div class="timeline-dot"></div>
                            <div class="timeline-card">
                                <div class="card-header">
                                    <div class="company-info">
                                        <h3 class="company-name">{{ info.company }}</h3>
                                        <span class="job-type">{{ info.type }}</span>
                                        <span class="job-location">{{ info.location }}</span>
                                    </div>
                                    <div class="duration-badge">
                                        {{ calcDate({year: info.yearEnd, month: info.monthEnd}, {year: info.yearStart, month: info.monthStart}) }}
                                    </div>
                                </div>
                                <h4 class="role">{{ info.role }}</h4>
                                <p class="description">{{ info.description }}</p>
                                <div class="timeline-dates">
                                    <span class="date-start">{{ months[info.monthStart] }} {{ info.yearStart }}</span>
                                    <div class="date-separator"></div>
                                    <span class="date-end">
                                        <span v-if="info.yearEnd || info.monthEnd">{{ months[info.monthEnd] }} {{ info.yearEnd }}</span>
                                        <span v-else class="current-badge">Present</span>
                                    </span>
                                </div>
                            </div>
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
            months: [0, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            timelineData: [
                {
                    "company": "OpenFoodChain.com",
                    "role": "Lead Infra Engineer",
                    "type": "Full Time",
                    "location": "Amsterdam, Netherlands",
                    "description": "Open Food Chain is a proven and affordable decentralize infrastructure for entire agrifood supply chains to report and manage ESG claims.",
                    "monthStart": 7,
                    "yearStart": 2023,
                    "monthEnd": 9,
                    "yearEnd": 2025
                },
                {
                    "company": "Marlin SCX",
                    "role": "Cloud Architect",
                    "type": "Part Time",
                    "location": "Rotterdam, Netherlands",
                    "description": "Marlin-SCX is a data marketplace that enables data sharing in a decentralized federated network, allowing authorized parties to dynamically access data in real-time.",
                    "monthStart": 1,
                    "yearStart": 2023,
                    "monthEnd": 1,
                    "yearEnd": 2024
                },
                {
                    "company": "EVOS E-SPORTS",
                    "role": "Devops Engineer",
                    "type": "Full Time",
                    "location": "Jakarta, Indonesia",
                    "description": "Distributed to an ad network service: Play3 by EVOSVERSE, that offers a value exchange system for advertisers, publishers, and also users.",
                    "monthStart": 4,
                    "yearStart": 2023,
                    "monthEnd": 7,
                    "yearEnd": 2023
                },
                {
                    "company": "Itsavirus.com",
                    "role": "Devops Engineer",
                    "type": "Full Time",
                    "location": "Bali, Indonesia",
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
                    "location": "Jakarta, Indonesia",
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
            let result = `${years}y ${months % 12}m`
            return result
        }
    }
}
</script>

<style scoped>
.work {
    /* padding: 3rem 1rem; */
    /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
    /* min-height: 100vh; */
}

.section-title {
    text-align: center;
}

.timeline-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    padding: 0 1rem;
}

.timeline {
    position: relative;
    padding: 2rem 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #667eea, rgba(255,255,255,0.3));
    transform: translateX(-50%);
    border-radius: 2px;
}

.timeline-item {
    position: relative;
    width: 50%;
    padding: 2rem;
    animation: slideIn 0.6s ease forwards;
    opacity: 0;
    transform: translateY(50px);
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-item:nth-child(4) { animation-delay: 0.4s; }
.timeline-item:nth-child(5) { animation-delay: 0.5s; }

.timeline-item--left {
    left: 0;
    text-align: right;
    padding-right: 3rem;
}

.timeline-item--right {
    left: 50%;
    padding-left: 3rem;
}

.timeline-dot {
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border: 4px solid #667eea;
    border-radius: 50%;
    top: 2rem;
    box-shadow: 0 0 0 4px rgba(255,255,255,0.3);
}

.timeline-item--left .timeline-dot {
    right: -10px;
}

.timeline-item--right .timeline-dot {
    left: -10px;
}

.timeline-card {
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.timeline-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: #667eea;
}

.timeline-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.timeline-item--left .timeline-card::after {
    content: '';
    position: absolute;
    top: 2rem;
    right: -10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left: 10px solid rgba(255,255,255,0.95);
}

.timeline-item--right .timeline-card::after {
    content: '';
    position: absolute;
    top: 2rem;
    left: -10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right: 10px solid rgba(255,255,255,0.95);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.company-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.company-name {
    font-size: 1.4rem;
    font-weight: 700;
    color: #2d3748;
    margin: 0;
}

.job-type {
    background: #667eea;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    width: fit-content;
}
.job-location {
    background: #0d1b30;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    width: fit-content;
}

.duration-badge {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    border: 2px solid rgba(102, 126, 234, 0.2);
}

.role {
    font-size: 1.1rem;
    font-weight: 600;
    color: #4a5568;
    margin: 0 0 1rem 0;
}

.description {
    color: #718096;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.timeline-dates {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(102, 126, 234, 0.1);
}

.date-start, .date-end {
    font-size: 0.9rem;
    font-weight: 600;
    color: #667eea;
}

.date-separator {
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 1px;
}

.current-badge {
    background: linear-gradient(45deg, #48bb78, #38a169);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
}

@keyframes slideIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 900px) {
    .timeline-wrapper {
        padding: 0 0.5rem;
    }
    
    .timeline-item {
        padding: 1.5rem;
    }
    
    .timeline-item--left {
        padding-right: 2.5rem;
    }

    .timeline-item--right {
        padding-left: 2.5rem;
    }
}

@media (max-width: 768px) {
    .timeline-wrapper {
        padding: 0;
    }
    
    .timeline::before {
        left: 2rem;
    }

    .timeline-item {
        width: 100% !important;
        left: 0 !important;
        padding: 1rem 1rem 1rem 4rem !important;
        text-align: left !important;
    }

    .timeline-dot {
        left: 1.25rem !important;
        right: auto !important;
    }

    .timeline-card::after {
        top: 2rem !important;
        left: -10px !important;
        right: auto !important;
        border: 10px solid transparent !important;
        border-right: 10px solid rgba(255,255,255,0.95) !important;
        border-left: none !important;
    }

    .card-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .timeline-dates {
        justify-content: flex-start;
    }
}

@media (max-width: 480px) {
    .timeline-item {
        padding: 0.5rem 0.5rem 0.5rem 3.5rem !important;
    }
    
    .timeline-card {
        padding: 1.5rem;
    }
    
    .company-name {
        font-size: 1.2rem;
    }
    
    .duration-badge {
        font-size: 0.75rem;
        padding: 0.4rem 0.8rem;
    }
}
</style>