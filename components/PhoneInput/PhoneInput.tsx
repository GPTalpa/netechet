"use client";
import "./style.scss";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function PhoneField({
  value,
  onChange,
}: {
  value?: string;
  onChange: (value: string) => void;
}) {
  return (
    <PhoneInput
      defaultCountry="RU"
      international
      countryCallingCodeEditable={false}
      value={value}
      required
      onChange={(value) => onChange(value || "")}
    />
  );
}
