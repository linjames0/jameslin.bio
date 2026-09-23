import PhotoViewer from "../../../components/PhotoViewer";
import { series } from "../series";

export const metadata = { title: "New York Color — James Lin" };

export default function NewYorkColor() {
    return (
        <div data-page="photography">
            <PhotoViewer photos={series.newYorkColor} />
        </div>
    );
}
