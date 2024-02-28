import JobPostForm from '@/components/JobPostForm';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'post a job form job elephant', //Option 1 replaces the %s in layout.tsx
  // title: {//
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description:
    'All prices are in USD, switch region to change prices. Ads are live for up to 60 days, and include the employer logo and ad performance metrics.',
  keywords: 'Post Academic Jobs, Post a Job AcademicJobs',
};



const PostJobPage = () => {
  return <JobPostForm partner="" region="USA" />; //Leave this blank for AcademicJobs
};
export default PostJobPage;
