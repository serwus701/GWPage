import axios from "axios";
import { BASE_API_URL } from "@/common/constans";
import { WPPage } from "@/common/models/wpPage";

const getPage = async (): Promise<WPPage> => {
    const res = await axios.get<WPPage[]>(`${BASE_API_URL}wp-json/wp/v2/pages?slug=aktualnosci`);
    return res.data[0];
};

export default getPage;
