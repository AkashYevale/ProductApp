SELECT * FROM task_list_app1.task_tag_mapping;

use task_list_app1;

select *,if(exists(select * from task_tag_mapping where task_id=3 and tag_id= t.id),1,0) 
as is_selected from tag_master t ;


set sql_safe_updates=0;
drop table task_tag_mapping;
drop view view_task_tag_mapping;









select * from  viewTaskTagMapping  where tag.ID=TAG_ID AND TASK_ID=

select * from task_tag_mapping where task_id=1 and tag_id= t.id


