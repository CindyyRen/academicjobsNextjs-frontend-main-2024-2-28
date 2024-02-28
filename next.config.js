/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'academicjobs.s3.amazonaws.com',
      'res.cloudinary.com',
      'iloveacademicjobs.com',
      'uniiq.com',
      'qut.edu.au',
    ],
  },
  async redirects() {
    return [
      {
        source: '/find-jobs',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/:path',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/hr',
        destination: '/hr-jobs',
        permanent: true,
      },
      {
        source: '/employer',
        destination: '/employers',
        permanent: true,
      },
      {
        source: '/global/employers',
        destination: '/employers',
        permanent: true,
      },
      {
        source: '/global/recruitment',
        destination: '/recruitment',
        permanent: true,
      },
      {
        source: '/global/jobs',
        destination: '/jobs',
        permanent: true,
      },
      {
        source: '/global',
        destination: '/',
        permanent: true,
      },
      {
        source: '/academic-hub',
        destination: '/career-help',
        permanent: true,
      },
      {
        source: '/talent-pool',
        destination: '/academic-talent-pool',
        permanent: true,
      },

      {
        source: '/jobs/general-manager-jobs',
        destination: '/hr-jobs/generalist-hr',
        permanent: true,
      },
      {
        source: '/jobs/student-casual',
        destination: '/student/casual',
        permanent: true,     
      },
      {
        source: '/jobs/healthcare-managing-director-jobs',
        destination: '/faculty/healthcare-administration',
        permanent: true,
      },
      {
        source: '/jobs/healthcare-managing-director-jobs',
        destination: '/faculty/healthcare-administration',
        permanent: true,
      },
      {
        source: '/jobs/project-delivery-director-jobs',
        destination: '/executive/directors',
        permanent: true,
      },
      {
        source: '/jobs/head-treasury-jobs',
        destination: '/executive/heads-department-chairs-department-jobs',
        permanent: true,
      },
      {
        source: '/jobs/head-sustainability-jobs',
        destination: '/faculty/other-science-specialities',
        permanent: true,
      },
      {
        source: '/jobs/construction-manager-jobs',
        destination: '/faculty/construction-building-trades/',
        permanent: true,
      },

      {
        source: '/jobs/student-full-time',
        destination: '/student/full-time',
        permanent: true,
      },

      {
        source: '/jobs/chief-technology-officer-jobs',
        destination: '/faculty/information-systems-technology/',
        permanent: true,
      },
      {
        source: '/jobs/ceo-md-jobs',
        destination: '/faculty/business-management/',
        permanent: true,
      },

      {
        source: '/jobs/student-part-time',
        destination: '/student/part-time',
        permanent: true,
      },
      {
        source: '/jobs/equity-partner-jobs',
        destination: '/faculty/other-business-specialities',
        permanent: true,
      },

      {
        source: '/jobs/development-director-jobs',
        destination: '/executive/directors',
        permanent: true,
      },
      {
        source: '/macquarie-university-jobs',
        destination: '/employers/macquarie-university/3881',
        permanent: true,
      },

      {
        source: '/position',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/monash-university-jobs',
        destination: '/employers/monash-university/3182/',
        permanent: true,
      },

      {
        source: '/the-university-of-western-australia-jobs',
        destination: '/employers/university-of-western-australia/3173',
        permanent: true,
      },
      {
        source: '/the-university-of-queensland-jobs',
        destination: '/employers/university-of-queensland/3172',
        permanent: true,
      },

      {
        source: '/the-university-of-sydney-jobs',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },

      {
        source: '/university-of-new-south-wales-jobs',
        destination: '/employers/university-of-new-south-wales-unsw-/3738',
        permanent: true,
      },
      {
        source: '/the-university-of-adelaide-jobs',
        destination: '/employers/the-university-of-adelaide/3737',
        permanent: true,
      },

      {
        source: '/university-of-technology-sydney-jobs',
        destination: '/employers/university-of-technology-sydney/3864',
        permanent: true,
      },
      {
        source: '/the-university-of-melbourne-jobs',
        destination: '/employers/university-of-melbourne/3170/',
        permanent: true,
      },

      {
        source: '/usa/admin',
        destination: '/usa/staff',
        permanent: true,
      },
      {
        source: '/post-job',
        destination: '/recruitment',
        permanent: true,
      },

      {
        source: '/australian-national-university-jobs',
        destination: '/employers/australian-national-university/3739',
        permanent: true,
      },

      {
        source: '/categories/culinary-arts-university-jobs',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/categories/educational-psychology-university-jobs',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/categories/electronics-university-jobs',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/categories/medicine-university-jobs',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/categories/sociology-university-jobs',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/categories/teacher-education-middle-school-university-jobs',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/company/3105/university-of-california-berkeley',
        destination: '/employers',
        permanent: true,
      },
      {
        source: '/company/3781/tarrant-county-college-district',
        destination: '/employers',
        permanent: true,
      },
      {
        source: '/employers/company/deakin-university/3856',
        destination: '/employers',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-administration',
        destination: '/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-executive',
        destination: '/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-human-resources',
        destination: '/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-lecturing',
        destination: '/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-professor',
        destination: '/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/find-jobs/bond-university-research',
        destination: '/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-administration',
        destination: '/employers/harvard-university/3100',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-executive',
        destination: '/employers/harvard-university/3100',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-human-resources',
        destination: '/employers/harvard-university/3100',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-lecturing',
        destination: '/employers/harvard-university/3100',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-professor',
        destination: '/employers/harvard-university/3100',
        permanent: true,
      },
      {
        source: '/find-jobs/harvard-university-research',
        destination: '/employers/harvard-university/3100',
        permanent: true,
      },
      {
        source: '/find-jobs/northern-territory',
        destination: '/australia/jobs',
        permanent: true,
      },
      {
        source: '/find-jobs/qut-lecturing',
        destination: '/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/find-jobs/qut-professor',
        destination: '/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/find-jobs/qut-research',
        destination: '/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/find-jobs/qut-university-administration',
        destination: '/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/find-jobs/qut-university-executive',
        destination: '/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/find-jobs/qut-university-human-resources',
        destination: '/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/find-jobs/ucsd-lecturing',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/find-jobs/ucsd-professor',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/find-jobs/ucsd-research',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/find-jobs/ucsd-university-administration',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/find-jobs/ucsd-university-executive',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/find-jobs/ucsd-university-human-resources',
        destination: '/employers/the-university-of-sydney/3171',
        permanent: true,
      },
      {
        source: '/h/employers/university-of-tasmania/3867',
        destination: '/employers/university-of-tasmania/3867',
        permanent: true,
      },
      {
        source: '/employers/12787/university-of-kwazulu-natal',
        destination: '/employers/university-of-kwazulu-natal/12787',
        permanent: true,
      },
      {
        source: '/position/assistant-professor',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/position/associate-professor',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/position/lab-technician',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/position/other-positions',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/position/postdoc',
        destination: '/faculty',
        permanent: true,
      },
      {
        source: '/categories/administration',
        destination: '/admin',
        permanent: true,
      },
      {
        source: '/blog/how-to-land-your-dream-college-job-a-step-by-step-guide/',
        destination: '/career-help/how-to-land-your-dream-college-job-a-step-by-step-guide',
        permanent: true,
      },
      {
        source: '/uk/hr',
        destination: '/uk/hr-jobs',
        permanent: true,
      },

      {
        source: '/uk/hr',
        destination: '/uk/hr-jobs',
        permanent: true,
      },
      // {
      //   source: '/Canada',
      //   destination: '/canada',
      //   permanent: true,
      // },
      // {
      //   source: '/Australia',
      //   destination: '/australia',
      //   permanent: true,
      // },
      // {
      //   source: '/UK',
      //   destination: '/uk',
      //   permanent: true,
      // },
      // {
      //   source: '/Europe',
      //   destination: '/europe',
      //   permanent: true,
      // },
      // {
      //   source: '/USA',
      //   destination: '/usa',
      //   permanent: true,
      // },
      // {
      //   source: '/Asia',
      //   destination: '/asia',
      //   permanent: true,
      // },
         {
        source: '/employers/academic-jobs-australia/3328',
        destination: '/australia',
        permanent: true,
      },
      
  
    ];
  },
};

module.exports = nextConfig;
