class AuctionSerializer < ActiveModel::Serializer
  attributes(:id, :title, :description, :created_at,
    :updated_at, :reserve_price, :end_date)
  belongs_to :user, key: :author
  has_many :bids

  class BidSerializer < ActiveModel::Serializer
      attributes(:id, :bid_price, :created_at, :author_full_name)

      def author_full_name
        object.user&.full_name
    end
  end

end
