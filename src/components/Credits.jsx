import { AiFillGithub } from 'react-icons/ai';

export default function Credits() {
  return (
    <div className="absolute bottom-0 text-xs right-0 p-2 flex items-center gap-4">
      <a href="https://www.blenderkit.com/asset-gallery-detail/e8a58537-3114-4962-a5c5-60fdb0346f1c/" target="_blank">
        Beetle Model by Rodrigo Marini
      </a>
      <span>|</span>
      <a href="https://github.com/arielfavaro/beetle-view" target="_blank" className='githubIcon' rel="noreferrer">
        <AiFillGithub size="2rem" />
      </a>
    </div>
  );
}