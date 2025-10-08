
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { currencies, useCurrency } from "@/contexts/CurrencyContext";
import { DollarSign } from "lucide-react";

const FloatingCurrencySelector = () => {
  const { selectedCurrency, setSelectedCurrency } = useCurrency();

  return (
    <div className="fixed top-20 right-4 z-20 animate-fade-in">
      <div className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 rounded-lg shadow-lg border p-2">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-gray-600" />
          <Select 
            value={selectedCurrency.code} 
            onValueChange={(value) => {
              const currency = currencies.find(c => c.code === value);
              if (currency) setSelectedCurrency(currency);
            }}
          >
            <SelectTrigger className="w-20 h-8 text-xs border-0 bg-transparent focus:ring-0">
              <SelectValue>
                {selectedCurrency.code}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white/95 backdrop-blur">
              {currencies.map((currency) => (
                <SelectItem key={currency.code} value={currency.code} className="text-xs">
                  {currency.symbol} {currency.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FloatingCurrencySelector;
