import CategoryItem, {
  Category,
} from '../category-item/category-item.component';
import './directory.styles.scss';
interface Props {
  categories: Category[];
}

const Directory: React.FC<Props> = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Directory;
