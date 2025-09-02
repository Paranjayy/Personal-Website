import { NextResponse } from "next/server";
import VCard from "vcard-creator";

import { USER } from "@/features/profile/data/user";
import { decodeEmail, decodePhoneNumber } from "@/utils/string";

export const dynamic = "force-static";

export async function GET() {
  const card = new VCard();

  card
    .addName(USER.lastName, USER.firstName)
    .addPhoneNumber(decodePhoneNumber(USER.phoneNumber))
    .addAddress(USER.address)
    .addEmail(decodeEmail(USER.email))
    .addURL(USER.website);

  // Note: Photo fetching disabled for static export compatibility
  // const photo = await getVCardPhoto(USER.avatar);
  // if (photo) {
  //   card.addPhoto(photo.image, photo.mine);
  // }

  if (USER.jobs.length > 0) {
    const company = USER.jobs[0];
    card.addCompany(company.company).addJobtitle(company.title);
  }

  return new NextResponse(card.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
    },
  });
}

// Removed getVCardPhoto and convertImageToJpeg functions
// for static export compatibility
