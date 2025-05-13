export const courses = [
  {
    id: 1,
    name: 'Introduction to Computer Science',
    instructor: 'Dr. Maria Santos',
    progress: 75,
    lastUpdated: '2 days ago',
    image: '/placeholder.svg?height=100&width=200',
    startDate: 'January 15, 2025',
    duration: '12 weeks',
    enrolledStudents: 45,
    modules: [
      {
        title: 'Module 1: Introduction to Programming',
        description: 'Basic concepts and programming fundamentals',
        completed: true,
      },
      {
        title: 'Module 2: Data Structures',
        description: 'Arrays, linked lists, and basic data structures',
        completed: true,
      },
      {
        title: 'Module 3: Algorithms',
        description: 'Basic algorithms and problem-solving techniques',
        completed: false,
      },
      {
        title: 'Module 4: Object-Oriented Programming',
        description: 'Classes, objects, and inheritance',
        completed: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Advanced Mathematics',
    instructor: 'Prof. Juan Dela Cruz',
    progress: 45,
    lastUpdated: 'Yesterday',
    image: '/placeholder.svg?height=100&width=200',
    startDate: 'February 1, 2025',
    duration: '16 weeks',
    enrolledStudents: 32,
    modules: [
      {
        title: 'Module 1: Linear Algebra',
        description: 'Matrices, vectors, and linear transformations',
        completed: true,
      },
      {
        title: 'Module 2: Calculus',
        description: 'Differential and integral calculus',
        completed: false,
      },
      {
        title: 'Module 3: Statistics',
        description: 'Probability and statistical analysis',
        completed: false,
      },
    ],
  },
  {
    id: 3,
    name: 'Environmental Science',
    instructor: 'Dr. Ana Reyes',
    progress: 90,
    lastUpdated: 'Today',
    image: '/placeholder.svg?height=100&width=200',
    startDate: 'January 10, 2025',
    duration: '14 weeks',
    enrolledStudents: 28,
    modules: [
      {
        title: 'Module 1: Ecosystems',
        description: 'Understanding different ecosystems',
        completed: true,
      },
      {
        title: 'Module 2: Climate Change',
        description: 'Causes and effects of climate change',
        completed: true,
      },
      {
        title: 'Module 3: Conservation',
        description: 'Environmental conservation methods',
        completed: true,
      },
      {
        title: 'Module 4: Sustainability',
        description: 'Sustainable practices and solutions',
        completed: false,
      },
    ],
  },
  {
    id: 4,
    name: 'Philippine Literature',
    instructor: 'Prof. Carlos Mendoza',
    progress: 30,
    lastUpdated: '3 days ago',
    image: '/placeholder.svg?height=100&width=200',
    startDate: 'February 5, 2025',
    duration: '10 weeks',
    enrolledStudents: 38,
    modules: [
      {
        title: 'Module 1: Pre-colonial Literature',
        description: 'Early Philippine literary works',
        completed: true,
      },
      {
        title: 'Module 2: Spanish Period',
        description: 'Literature during Spanish colonization',
        completed: false,
      },
      {
        title: 'Module 3: American Period',
        description: 'Literature during American occupation',
        completed: false,
      },
      {
        title: 'Module 4: Contemporary Literature',
        description: 'Modern Philippine literary works',
        completed: false,
      },
    ],
  },
  {
    id: 5,
    name: 'Web Development Fundamentals',
    instructor: 'Prof. Sarah Chen',
    progress: 60,
    lastUpdated: '1 day ago',
    image: '/placeholder.svg?height=100&width=200',
    startDate: 'February 15, 2025',
    duration: '14 weeks',
    enrolledStudents: 52,
    modules: [
      {
        title: 'Module 1: HTML & CSS Basics',
        description: 'Introduction to web markup and styling',
        completed: true,
      },
      {
        title: 'Module 2: JavaScript Fundamentals',
        description: 'Core JavaScript concepts and DOM manipulation',
        completed: true,
      },
      {
        title: 'Module 3: Responsive Design',
        description: 'Creating mobile-friendly websites',
        completed: false,
      },
      {
        title: 'Module 4: Frontend Frameworks',
        description: 'Introduction to Vue.js and React',
        completed: false,
      },
    ],
  },
  {
    id: 6,
    name: 'Data Science Essentials',
    instructor: 'Dr. Michael Wong',
    progress: 85,
    lastUpdated: 'Today',
    image: '/placeholder.svg?height=100&width=200',
    startDate: 'January 20, 2025',
    duration: '16 weeks',
    enrolledStudents: 41,
    modules: [
      {
        title: 'Module 1: Python for Data Science',
        description: 'Python programming and data manipulation',
        completed: true,
      },
      {
        title: 'Module 2: Data Analysis',
        description: 'Statistical analysis and data visualization',
        completed: true,
      },
      {
        title: 'Module 3: Machine Learning Basics',
        description: 'Introduction to ML algorithms',
        completed: true,
      },
      {
        title: 'Module 4: Data Visualization',
        description: 'Creating effective data visualizations',
        completed: false,
      },
    ],
  },
  {
    id: 7,
    name: 'Digital Marketing Strategy',
    instructor: 'Prof. Lisa Martinez',
    progress: 40,
    lastUpdated: '3 days ago',
    image: '/placeholder.svg?height=100&width=200',
    startDate: 'February 10, 2025',
    duration: '12 weeks',
    enrolledStudents: 35,
    modules: [
      {
        title: 'Module 1: Marketing Fundamentals',
        description: 'Core marketing concepts and strategies',
        completed: true,
      },
      {
        title: 'Module 2: Social Media Marketing',
        description: 'Platform-specific strategies and content creation',
        completed: true,
      },
      {
        title: 'Module 3: SEO & Content Marketing',
        description: 'Search engine optimization and content strategy',
        completed: false,
      },
      {
        title: 'Module 4: Analytics & ROI',
        description: 'Measuring marketing effectiveness',
        completed: false,
      },
    ],
  },
]

export const events = [
  {
    id: 1,
    title: 'Midterm Exam: Computer Science',
    date: 'Apr 25, 2025',
    time: '9:00 AM - 12:00 PM',
    type: 'exam',
  },
  {
    id: 2,
    title: 'Assignment Deadline: Environmental Science',
    date: 'Apr 28, 2025',
    time: '11:59 PM',
    type: 'assignment',
  },
  {
    id: 3,
    title: 'Group Project Meeting',
    date: 'Apr 30, 2025',
    time: '2:00 PM - 4:00 PM',
    type: 'meeting',
  },
  {
    id: 4,
    title: 'Final Project Submission',
    date: 'May 5, 2025',
    time: '11:59 PM',
    type: 'assignment',
  },
  {
    id: 5,
    title: 'Research Paper Presentation',
    date: 'May 8, 2025',
    time: '10:00 AM - 12:00 PM',
    type: 'exam',
  },
  {
    id: 6,
    title: 'Study Group Session',
    date: 'May 10, 2025',
    time: '3:00 PM - 5:00 PM',
    type: 'meeting',
  },
  {
    id: 7,
    title: 'Lab Report Due',
    date: 'May 12, 2025',
    time: '11:59 PM',
    type: 'assignment',
  },
  {
    id: 8,
    title: 'Final Exam: Mathematics',
    date: 'May 15, 2025',
    time: '9:00 AM - 12:00 PM',
    type: 'exam',
  },
  {
    id: 9,
    title: 'Course Review Session',
    date: 'May 18, 2025',
    time: '1:00 PM - 3:00 PM',
    type: 'meeting',
  },
  {
    id: 10,
    title: 'Final Project Defense',
    date: 'May 20, 2025',
    time: '2:00 PM - 4:00 PM',
    type: 'exam',
  },
]

export const privateFiles = [
  {
    id: 1,
    name: 'CS101_Week1_Lecture.pdf',
    size: '2.4 MB',
    date: 'Apr 22, 2025',
    type: 'pdf',
  },
  {
    id: 2,
    name: 'Math_Assignment_3_Solution.docx',
    size: '1.1 MB',
    date: 'Apr 18, 2025',
    type: 'doc',
  },
  {
    id: 3,
    name: 'Research_Paper_Final.pdf',
    size: '3.7 MB',
    date: 'Apr 15, 2025',
    type: 'pdf',
  },
  {
    id: 4,
    name: 'Group_Project_Presentation.pptx',
    size: '4.2 MB',
    date: 'Apr 12, 2025',
    type: 'ppt',
  },
  {
    id: 5,
    name: 'Lab_Report_2_Data.xlsx',
    size: '1.8 MB',
    date: 'Apr 10, 2025',
    type: 'xls',
  },
  {
    id: 6,
    name: 'Study_Notes_Chapter3.docx',
    size: '0.9 MB',
    date: 'Apr 8, 2025',
    type: 'doc',
  },
  {
    id: 7,
    name: 'Project_Proposal_Final.pptx',
    size: '5.6 MB',
    date: 'Apr 5, 2025',
    type: 'ppt',
  },
  {
    id: 8,
    name: 'Final_Exam_Review_Guide.pdf',
    size: '2.1 MB',
    date: 'Apr 3, 2025',
    type: 'pdf',
  },
  {
    id: 9,
    name: 'Assignment_4_Code.zip',
    size: '1.3 MB',
    date: 'Apr 1, 2025',
    type: 'zip',
  },
  {
    id: 10,
    name: 'Course_Syllabus_2024.pdf',
    size: '0.8 MB',
    date: 'Mar 28, 2025',
    type: 'pdf',
  },
  {
    id: 11,
    name: 'Lab_Data_Analysis.xlsx',
    size: '2.2 MB',
    date: 'Mar 25, 2025',
    type: 'xls',
  },
  {
    id: 12,
    name: 'Group_Meeting_Notes.docx',
    size: '0.7 MB',
    date: 'Mar 22, 2025',
    type: 'doc',
  },
]

export const conversations = [
  {
    id: 1,
    name: 'Dr. Maria Santos',
    avatar: 'MS',
    lastMessage: 'Please submit your assignment by Friday.',
    time: '10:30 AM',
    unread: 2,
    type: 'individual',
  },
  {
    id: 2,
    name: 'CS101 Group Project',
    avatar: 'CS',
    lastMessage: "Juan: I've completed the database schema.",
    time: 'Yesterday',
    unread: 5,
    type: 'group',
  },
  {
    id: 3,
    name: 'Prof. Juan Dela Cruz',
    avatar: 'JC',
    lastMessage: 'Your midterm grade has been posted.',
    time: 'Yesterday',
    unread: 0,
    type: 'individual',
  },
  {
    id: 4,
    name: 'Ana Reyes',
    avatar: 'AR',
    lastMessage: "Can you share your notes from today's lecture?",
    time: 'Monday',
    unread: 0,
    type: 'individual',
  },
  {
    id: 5,
    name: 'Environmental Science Class',
    avatar: 'ES',
    lastMessage: 'Dr. Reyes: Field trip details have been posted.',
    time: 'Monday',
    unread: 28,
    type: 'group',
  },
  {
    id: 6,
    name: 'Carlos Mendoza',
    avatar: 'CM',
    lastMessage: 'Thanks for helping with the project!',
    time: 'Last week',
    unread: 0,
    type: 'individual',
  },
  {
    id: 7,
    name: 'Academic Advising',
    avatar: 'AA',
    lastMessage: 'Your advising appointment is scheduled for next Tuesday.',
    time: 'Last week',
    unread: 0,
    type: 'group',
  },
]

const getEventIcon = (type) => {
  switch (type) {
    case 'exam':
      return 'mdi-file-document'
    case 'assignment':
      return 'mdi-pencil'
    case 'meeting':
      return 'mdi-account-group'
    default:
      return 'mdi-calendar'
  }
}

const getEventColor = (type) => {
  switch (type) {
    case 'exam':
      return 'green-darken-2'
    case 'assignment':
      return 'green-accent-2'
    case 'meeting':
      return 'green-accent-4'
    default:
      return 'grey-darken-2'
  }
}

const getFileIcon = (type) => {
  switch (type) {
    case 'pdf':
      return 'mdi-file-pdf-box'
    case 'doc':
      return 'mdi-file-word'
    case 'ppt':
      return 'mdi-file-powerpoint'
    case 'xls':
      return 'mdi-file-excel'
    case 'zip':
      return 'mdi-zip-box'
    default:
      return 'mdi-file'
  }
}

const getFileColor = (type) => {
  switch (type) {
    case 'pdf':
      return 'red-darken-2'
    case 'doc':
      return 'blue-darken-2'
    case 'ppt':
      return 'orange-darken-2'
    case 'xls':
      return 'green-darken-2'
    case 'zip':
      return 'purple-darken-2'
    default:
      return 'grey-darken-2'
  }
}

export const useMockData = () => {
  return {
    courses,
    events,
    privateFiles,
    getEventIcon,
    getEventColor,
    getFileIcon,
    getFileColor,
  }
}
