import { classNames } from 'shared/lib/className/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface SharedLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: SharedLoaderProps) => {

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
};
