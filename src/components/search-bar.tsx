import { Input } from "./ui/input";
import { BiSearch } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";

export function SearchBar({ onLocationConfirmed }: { onLocationConfirmed: (confirmed: boolean) => void }) {
  const [inputValue, setInputValue] = useState("");

  const sendEmail = async () => {
    try {
      const response = await fetch('https://api4-241222410541.us-central1.run.app/email/alert', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Location confirmed' }),
      });
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const sendSMS = async () => {
    try {
      const response = await fetch('https://api4-241222410541.us-central1.run.app/sms/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Location confirmed' }),
      });
      if (!response.ok) {
        throw new Error('Failed to send SMS');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  const handleLocationClick = async () => {
    setInputValue("Toruń");
    onLocationConfirmed(true);
    await sendEmail();
    await sendSMS();
  };

  const handleSearch = async () => {
    if (inputValue.toLowerCase().includes("torun") || inputValue.toLowerCase().includes("toruń")) {
      onLocationConfirmed(true);
      await sendEmail();
      await sendSMS();
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[60%] flex items-center">
        <Input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <BiSearch
          size={60}
          className="ml-2 px-2 py-2 cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearch}
        />
        <BiCurrentLocation
          size={60}
          className="ml-2 px-2 py-2 cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
    </div>
  );
}