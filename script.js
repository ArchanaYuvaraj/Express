document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-course-form');
    const coursesDiv = document.getElementById('courses');
  
    
    fetchCourses();
  
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const courseName = document.getElementById('course-name').value;
        const courseCode = document.getElementById('course-code').value;
        const courseYear = document.getElementById('course-year').value;
  
        if (courseName && courseCode && courseYear) {
            try {
                const response = await fetch('http://localhost:3001/api/courses', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ courseName, courseCode, courseYear }),
                });
  
                if (response.ok) {
                    fetchCourses(); 
                    form.reset(); 
                } else {
                    console.error('Failed to add course');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });
   
    async function fetchCourses() {
        try {
            const response = await fetch('http://localhost:3001/api/courses');
            const data = await response.json();
            const coursesHtml = data.map((course) => {
                return `
                    <div class="course">
                        <h3>${course.courseName}</h3>
                        <p>Course Code: ${course.courseCode}</p>
                        <p>Year: ${course.courseYear}</p>
                    </div>
                `;
            }).join('');
            coursesDiv.innerHTML = coursesHtml;
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    }
});
