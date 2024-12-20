import PhotoDetails from "@/components/PhotoDetails";

export default async function Photo({ params: { lang, id } }) {
  return <PhotoDetails id={id} lang={lang} />;
}
