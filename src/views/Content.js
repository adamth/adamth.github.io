import React, { Component } from "react";
import "./Content.scss";
import ContentItem from "../components/ContentItem";
import ProjectItem from "../components/ProjectItem";

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <h1>
                    Adam
                    <br />
                    Thompson
                </h1>
                <div className="sub-heading">
                    <p>Web Developer</p>
                </div>
                <div className="content-body">
                    <h3 className="red">WORK BACKGROUND</h3>
                    <ContentItem
                        heading="Web Developer"
                        subheading="Alliance Software | 2018 - Present"
                        tagline="Alliance software are a world-class agile software development agency specialising in complex web apps."
                    >
                        <ProjectItem>
                            <ul>
                                <li>
                                    Full stack web developer responsible for
                                    numerous client projects, either as the sole
                                    developer or as part of a team.
                                </li>
                                <li>
                                    Provide maintenance to established products.
                                </li>
                                <li>
                                    Develop new products including selecting
                                    libraries and technical direction.
                                </li>
                                <li>Logo and UI design.</li>
                                <li>
                                    Develop native apps for iOS and Android
                                    based on existing web products to enable
                                    more seamless use while in poor network
                                    coverage areas.
                                </li>
                                <li>
                                    Work directly with clients on challenging
                                    projects to ensure their requirements are
                                    met.
                                </li>
                                <li>Manage all source code using git.</li>
                                <li>
                                    Provide code reviews on colleagues work.
                                </li>
                                <li>
                                    Work with multiple languages including
                                    JavaScript, Python and Swift.
                                </li>
                                <li>
                                    Investigate the latest web development
                                    frameworks and tools (including GraphQL) to
                                    update the organisation standard development
                                    stack, ensuring products are able to be
                                    developed quickly and to the latest
                                    standards.
                                </li>
                            </ul>
                        </ProjectItem>
                    </ContentItem>
                    <ContentItem
                        heading="Systems Analyst"
                        subheading="Mind Austrlia | 2013 - 2018"
                        tagline="Mind Australia is one of the country's leading community-managed specialist mental health service providers."
                    >
                        <ProjectItem
                            product="An online tool to allow clients to sign on a touch screen"
                            backend="Express"
                            Frontend="React, Redux"
                            database="MS-SQL, MongoDB"
                        >
                            Mind Australia delivers service from over 180
                            different addresses across Australia and had no
                            central repository of this information. I designed
                            and developed an online solution that allowed staff
                            to search, filter and update service information.
                            Features include editable metadata for each site,
                            google maps integration, site photos and manager
                            information. The system is tightly integrated with
                            the human resource system to automatically populate
                            manager information. The database schema is managed
                            using migrations which provides version control for
                            the database. The solution has become a business
                            critical tool for a number of staff members.
                        </ProjectItem>
                        <ProjectItem
                            product="An online service directory to manage over 180 service delivery addresses"
                            backend="IIS"
                            frontend="ASP.net"
                            database="MS-SQL"
                        >
                            Mind Australia delivers service from over 180
                            different addresses across Australia and had no
                            central repository of this information. I designed
                            and developed an online solution that allowed staff
                            to search, filter and update service information.
                            Features include editable metadata for each site,
                            google maps integration, site photos and manager
                            information. The system is tightly integrated with
                            the human resource system to automatically populate
                            manager information. The database schema is managed
                            using migrations which provides version control for
                            the database. The solution has become a business
                            critical tool for a number of staff members.
                        </ProjectItem>
                        <ProjectItem product="QlikView reporting dashboards">
                            <ul>
                                <li>
                                    Designed and developed over 20 different
                                    reporting dashboards using QlikView.
                                </li>
                                <li>
                                    Responsible for requirement gathering, data
                                    modeling, report design and implementation.
                                </li>
                                <li>
                                    Developed a number of automated static
                                    reports leveraging the work done in
                                    QlikView, including monthly individual phone
                                    usage reports sent to over 500 staff
                                    members.
                                </li>
                                <li>
                                    Since starting, QlikView reporting has
                                    become an integral part of Mind Australia's
                                    business intelligence strategy and has set
                                    the benchmark for business intelligence in
                                    the not for profit sector.
                                </li>
                            </ul>
                        </ProjectItem>
                        <ProjectItem product="Data Warehouse">
                            Rebuilt existing data warehouse solution from the
                            ground up to break the dependence on a third-party
                            plug-in. This allowed the upgrade or decommissioning
                            of multiple legacy servers, as well as overall
                            improved performance of the data warehouse. Utilised
                            Microsoft SSIS packages, SQL scripts and C#.
                        </ProjectItem>
                        <ProjectItem>
                            <p>Miscellaneous</p>
                            <ul>
                                <li>
                                    Invited to be on discussion panel at Qlik
                                    "Visualise your world" conference in 2015 as
                                    a subject matter expert.
                                </li>
                                <li>
                                    Implemented git version control for all
                                    software projects (git lab).
                                </li>
                                <li>
                                    Conducted QlikView training sessions for
                                    staff.
                                </li>
                                <li>
                                    Provided support for terminal service
                                    applications and Citrix.
                                </li>
                            </ul>
                        </ProjectItem>
                    </ContentItem>
                    <ContentItem
                        heading="Senior Service Desk Analyst"
                        subheading="Wesley Mission Victoria | 2010 - 2013"
                        tagline="Wesley Mission cares for and supports disadvantaged and vulnerable Victorians through a range of community-based services."
                        hiderule
                    >
                        <ProjectItem>
                            <ul>
                                <li>
                                    Provided on site and phone support for
                                    remote clients.
                                </li>
                                <li>
                                    Configure and troubleshoot network equipment
                                    ranging from Cisco routers and switches to
                                    consumer level ADSL modems.
                                </li>
                                <li>
                                    Work in a team on projects including:
                                    <ul>
                                        <li>
                                            Designing and implementing a VPN
                                            solution for over 40 residential
                                            units and other remote sites.
                                        </li>
                                        <li>
                                            Designing and implementing full
                                            directory structure update impacting
                                            over 400 full time staff and
                                            hundreds of volunteers.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </ProjectItem>
                    </ContentItem>
                    <h3 className="red">EDUCATION</h3>
                    <ContentItem
                        heading="Deakin University"
                        subheading="Bachelor of Information Technology"
                        hiderule
                    >
                        <ProjectItem>
                            <ul>
                                <li>
                                    Graduated with a high distinction average
                                </li>
                                <li>
                                    Selected to be part of the team representing
                                    Deakin in the Telstra IoT competition
                                </li>
                            </ul>
                        </ProjectItem>
                    </ContentItem>
                    <ContentItem
                        heading="Box Hill TAFE"
                        subheading="Advanced Diploma of Computer Systems Engineering"
                        hiderule
                    />
                    <h3 className="red">OTHER INTERESTS</h3>
                    <ContentItem>
                        <ProjectItem>
                            <p>
                                I have numerous hobbies that I pursue outside of
                                work.
                            </p>
                            <ul>
                                <li>
                                    Electronics - developing tools to help with
                                    my other projects such as a web enabled
                                    thermostat to help with baking.
                                </li>
                                <li>
                                    Film Photography - I develop and scan my
                                    film at home and have enjoyed learning how
                                    the process works.
                                </li>
                                <li>
                                    Baking - I've recently learnt how to bake
                                    sourdough bread from scratch. The results
                                    are always shared with the office!
                                </li>
                                <li>
                                    Drones - I have built numerous drones from
                                    racing quadcopters to fixed wing planes.
                                </li>
                                <li>Running/Cycling</li>
                            </ul>
                        </ProjectItem>
                    </ContentItem>
                </div>
            </div>
        );
    }
}
