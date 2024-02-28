import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import RankingSearchForm from '@/components/forms/RankingSearchForm';

export const metadata: Metadata = {
  title: 'Find Your Academic Ranking with Ease! "Get-Ranked"', //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: '  Academic Jobs: Academic, research and science positions locally and globally.', //Option 2 overrides the title in layout.tsx
  // },
  description: `Discover where you stand academically with "Get-Ranked." Our platform offers a user-friendly search feature, allowing you to easily access your academic ranking. Whether you're a student, researcher, or faculty member, quickly retrieve your position and explore opportunities for growth in your academic journey.`,
  keywords:
    'Academic Ranking, Educational Assessment, Researcher Ranking, Student Achievement, Faculty Evaluation, University Ranking, College Performance, Scholarly Impact, Educational Progress, Academic Standing, Get-Ranked Search, Educational Excellence',
};
export default function myPage() {
  return (
    <>
      <main className="content-grid">
        <RankingSearchForm maxWidth="500" />
      </main>
    </>
  );
}
