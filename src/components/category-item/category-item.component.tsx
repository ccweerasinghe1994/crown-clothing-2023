import './category-item.styles.scss';

export type Category = {
  id: number;
  imageUrl: string;
  title: string;
};

const CategoryItem: React.FC<Category> = ({ imageUrl, title }) => {
  return (
    <div
      className='category-container'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className='background-image' />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
