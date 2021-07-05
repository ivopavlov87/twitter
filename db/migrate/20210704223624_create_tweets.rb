class CreateTweets < ActiveRecord::Migration[6.1]
  def change
    create_table :tweets do |t|
      t.integer :user_id, null: false
      t.string :body, limit: 140, null: false
      t.integer :likes, array: true, default: [nil]
      t.integer :retweet_id, null: true

      t.timestamps
    end

    add_index :tweets, :user_id 
  end
end
