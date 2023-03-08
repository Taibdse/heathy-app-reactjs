
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import AppButton from 'components/AppButton';
import GalleryCard from 'components/GalleryCard';
import RecommendationBox from 'components/RecommendationBox';
import Blog1Jpg from 'assets/img/blog1.jpg';
import Blog2Jpg from 'assets/img/blog2.jpg';
import Blog3Jpg from 'assets/img/blog3.jpg';
import Blog4Jpg from 'assets/img/blog4.jpg';
import Blog5Jpg from 'assets/img/blog5.jpg';
import Blog6Jpg from 'assets/img/blog6.jpg';
import Blog7Jpg from 'assets/img/blog7.jpg';
import Blog8Jpg from 'assets/img/blog8.jpg';

const blogThumbnails = [Blog1Jpg, Blog2Jpg, Blog3Jpg, Blog4Jpg, Blog5Jpg, Blog6Jpg, Blog7Jpg, Blog8Jpg];

const recommendationsData = [
  { id: 1, title: 'RECOMMENDED COLUMN', subTitle: 'オススメ' },
  { id: 2, title: 'RECOMMENDED DIET', subTitle: 'ダイエット' },
  { id: 3, title: 'RECOMMENDED BEAUTY', subTitle: '美容' },
  { id: 4, title: 'RECOMMENDED HEALTH', subTitle: '健康' },
];

const blogDetails = {
  title: '2021.05.17   23:25',
  desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  tags: ['#魚料理', '#和食', '#DHA'],
  thumbnail: ''
}

const mapBlogDetails = (length: number) => Array.from({ length }).map((it: any, idx: number) => ({
  id: idx,
  ...blogDetails,
  thumbnail: blogThumbnails[idx % 8]
}))

export default function BlogPage() {
  const [recommendations, setRecommendations] = useState(recommendationsData);
  const [blogs, setBlogs] = useState(mapBlogDetails(8));

  const handleLoadMoreBlog = () => {
    setBlogs(mapBlogDetails(blogs.length + 8))
  }

  return (
    <Container>
      <div className='row mt-5'>
        {recommendations.map(item => (
          <div className='col-sm-6 col-md-4 col-lg-3 mb-3' key={item.id}>
            <RecommendationBox recommendation={item} />
          </div>
        ))}
      </div>

      <div className='row my-5'>
        {blogs.map((blog: any) => (
          <div className='col-sm-6 col-md-4 col-lg-3 mb-3' key={blog.id}>
            <GalleryCard item={blog} showContent />
          </div>
        ))}
        <div className='col-12 text-center'>
          <AppButton label='コラムをもっと見る' onClick={handleLoadMoreBlog} />
        </div>
      </div>
    </Container>
  )
}
