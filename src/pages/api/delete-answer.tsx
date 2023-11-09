import type { NextApiRequest, NextApiResponse } from "next";
import AnswerNew from "@/models/AnswerNew";

export default async function handler(
    req : NextApiRequest,
    res : NextApiResponse
) {
    await AnswerNew.deleteMany({});
    res.status(200).json({ message: "success" });
}