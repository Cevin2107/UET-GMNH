import MajorCard from './MajorCard';
import { useReveal } from '../hooks/useReveal';

const categoryIcons = {
  "Máy tính và CNTT": "💻",
  "Công nghệ kỹ thuật": "🛠️",
  "Kỹ thuật": "🤖",
};

export default function MajorGrid({ groups }) {
  return (
    <div className="sections">
      {groups.map((group) => (
        <Section key={group.category} group={group} />
      ))}
    </div>
  );
}

function Section({ group }) {
  const [ref, visible] = useReveal();
  return (
    <section
      ref={ref}
      className={`section ${visible ? 'is-visible' : ''}`}
      id={`cat-${group.categoryId}`}
    >
      <div className="section__header">
        <span className="section__icon" aria-hidden="true">
          {categoryIcons[group.category] || '✨'}
        </span>
        <h2 className="section__title">{group.category}</h2>
        <span className="section__count">{group.items.length} ngành</span>
      </div>
      <div className="grid">
        {group.items.map((m) => (
          <MajorCard key={m.code} major={m} />
        ))}
      </div>
    </section>
  );
}
