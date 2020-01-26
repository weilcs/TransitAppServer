exports.name = 'home_tb';

exports.schema = (table) => {
    table.increments('id');
    table.string('event_title');
    table.string('event_description');
    table.string('event_image_url');
    table.timestamp('event_start_time');
    table.timestamp('event_end_time');
    table.string('event_category');
    table.timestamps(false, true);
};