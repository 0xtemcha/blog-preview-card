import styles from "./BlogPreviewCard.module.scss";
import blogImgSrc from "../../assets/illustration-article.svg";
import Tag from "../Tag/Tag";
import avatarSrc from "../../assets/image-avatar.webp";

const BlogPreviewCard = () => {
  return (
    <article className={styles.card}>
      <div className={styles.img}>
        <img src={blogImgSrc} />
      </div>
      <div className={styles.content}>
        <Tag>Learning</Tag>
        <span className={"text-preset-3"}>Published 21 Dec 2023</span>
        <h4 className={styles.title}>HTML & CSS foundations</h4>
        <p className={`${styles.desc} text-preset-2`}>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className={styles.author}>
        <div className={styles.authorAvatar}>
          <img src={avatarSrc} />
        </div>
        <div className={"text-preset-3-bold"}>Greg Hooper</div>
      </div>
    </article>
  );
};

export default BlogPreviewCard;
