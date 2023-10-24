import { ColumnDef } from "@tanstack/react-table";

interface Brand {
  id: number;
  name: string;
  name_localized: string;
}

interface Model {
  id: number;
  name: string;
  name_localized: string;
}

interface Color {
  id: number;
  name: string;
  name_localized: string;
  color_code: string;
}

interface Media {
  id: number;
  media_path: string;
}

interface AuctionItem {
  id: number;
  model_year: number;
  auction_type: string;
  type: string;
  mileage: number;
  start_price: number;
  base_price: number;
  bid_rate: number;
  test_report_path: string;
  registration_report_path: string;
  start_date: string;
  end_date: string;
  brand: Brand;
  model: Model;
  color: Color;
  media: Media[];
}

interface AuctionBid {
  id: number;
  auction_id: number;
  user_id: number;
  amount: number;
  createdAt: string;
  AuctionItem: AuctionItem;
}

export const bidsColumns: ColumnDef<AuctionBid>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "user_id",
    header: "User Id",
  },
  {
    accessorKey: "auction_id",
    header: "Auction Id",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "AuctionItem",
    header: "Auction Item",
    cell: ({ row }) => (
      <div className="flex items-center">
        <div className="flex flex-col">
          <div className="text-sm font-semibold">
            {row.original.AuctionItem.brand.name}
          </div>
          <div className="text-xs text-gray-400">
            {row.original.AuctionItem.model.name}
          </div>
        </div>
      </div>
    ),
  },
  {
    header: "Images",
    cell: ({ row }) => (
      <div className="flex items-center">
        {row.original.AuctionItem.media.map((media) => (
          <img
            className="w-12 h-12 object-cover rounded-md mx-1"
            src={`https://api.dallahmzad.com/${media.media_path}`}
            alt="car"
          />
        ))}
      </div>
    ),
  },
];
