/**
 * Renders the mission statement section for the About page.
 * @returns {string} HTML string for the mission statement.
 */
export function MissionStatement() {
    return `
        <div class="about-intro">
            <h3>Our Mission</h3>
            <p>ANDOVERVIEW is a publication written, edited and designed by the Newspaper Production class to serve as an open forum for students to discuss issues relevant to the Andover High School community.</p>
            <p>Letters to the editor and guest commentaries are encouraged; please email submissions to the following address: <a href="mailto:andoverview@andoverma.us">andoverview@andoverma.us</a>.</p>
            <p>If you would like to write for us or join the newspaper staff, please visit the <a href="#contact">Contact page</a> for more information. Include contact information for verification purposes. The staff of ANDOVERVIEW reserves the right to refuse material for reasons pertaining to length, clarity, libel, obscenity, copyright infringement, or material disruption to the educational process of Andover High School.</p>
        </div>
    `;
}