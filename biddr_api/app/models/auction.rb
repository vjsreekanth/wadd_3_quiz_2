class Auction < ApplicationRecord

    before_validation :capitalize_title

    has_many :bids, dependent: :nullify
    belongs_to :user

    validates(:title,
                presence: true,
                uniqueness: true)
        validates :reserve_price, numericality: { greater_than: 0 }
        validates :description, presence: true, length: { minimum: 10 }
        validates :end_date, presence: true
                    

    private

    def capitalize_title
        self.title.capitalize!
      end
end
