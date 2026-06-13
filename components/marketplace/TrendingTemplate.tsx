import TemplateCard from "./TemplateCard";

export default function TrendingTemplates({
  templates,
}: any) {
  const trendingTemplates = [...templates]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  return (
    <div className="mt-14">
      <h2 className="text-3xl font-bold mb-6">
        Trending Templates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendingTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
          />
        ))}
      </div>
    </div>
  );
}