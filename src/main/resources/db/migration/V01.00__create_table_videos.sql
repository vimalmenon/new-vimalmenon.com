CREATE TABLE videos (
   id INT NOT NULL AUTO_INCREMENT,
   video_id VARCHAR (50) NOT NULL,
   is_active TINYINT NOT NULL,
   PRIMARY KEY (id),
   CONSTRAINT UN_VIDEO_ID UNIQUE(video_id)
);