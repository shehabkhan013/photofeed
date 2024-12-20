import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

export default async function PhotoModal({ params: { lang, id } }) {
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
}
